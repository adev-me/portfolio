import type { PageLoad } from './$types';

// Repos to never surface (config dumps, scratch, the portfolio itself).
const HIDE = new Set(['ashdevelops', 'arch-linux-i3', 'arch-linux-hyprland', 'portfolio']);

type Repo = {
	name: string;
	description: string | null;
	language: string | null;
	html_url: string;
	homepage: string | null;
	stargazers_count: number;
	pushed_at: string;
	topics?: string[];
	fork: boolean;
	archived: boolean;
};

export type Project = {
	name: string;
	blurb: string;
	stack: string[];
	href: string;
	pushed_at: string;
};

export const load: PageLoad = async ({ fetch }) => {
	let repos: Repo[] = [];
	try {
		const res = await fetch(
			'https://api.github.com/users/adevme/repos?per_page=100&sort=pushed&direction=desc',
			{ headers: { Accept: 'application/vnd.github+json' } }
		);
		if (res.ok) repos = await res.json();
	} catch {
		// Build with no projects rather than fail.
	}

	const projects: Project[] = repos
		.filter((r) => !r.fork && !r.archived)
		.filter((r) => !HIDE.has(r.name))
		.filter((r) => r.description && r.description.trim().length > 0)
		.slice(0, 12)
		.map((r) => ({
			name: r.name,
			blurb: r.description!.trim(),
			stack: [r.language, ...(r.topics ?? [])].filter(Boolean) as string[],
			href: r.html_url,
			pushed_at: r.pushed_at
		}));

	return { projects };
};
