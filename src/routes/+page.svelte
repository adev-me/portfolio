<script lang="ts">
	import { Mail, MapPin, ArrowUpRight } from '@lucide/svelte';

	const stack = ['Go', 'C#', 'PHP', 'TypeScript', 'SvelteKit', 'MySQL', 'nginx', 'Linux'];

	type Project = {
		name: string;
		blurb: string;
		stack: string[];
		href?: string;
	};

	const projects: Project[] = [
		{
			name: 'adev',
			blurb:
				'Personal operating system. API-first ecosystem of single-purpose apps (habits, music, files, secrets, notes) sharing one Go API and one auth surface. Built end-to-end: Go + GORM + MariaDB on the back, SvelteKit + Tailwind on the front, single-binary deploys behind a Cloudflare-hardened origin.',
			stack: ['Go', 'GORM', 'MariaDB', 'SvelteKit', 'Tailwind', 'nginx', 'Cloudflare'],
			href: 'https://github.com/adev-me'
		},
		{
			name: 'Music seeder',
			blurb:
				'AI-driven music discovery agent. Reads a 4k-track listening profile, prompts GPT for genre-balanced suggestions across four discovery buckets (core / adjacent / bridge / wildcard), fetches YouTube previews via yt-dlp, uploads 30s clips to S3, and pushes proposals into the music app. Reverse-engineered and rebuilt from scratch when the prior binary went rap-monoculture.'
			,
			stack: ['Go', 'OpenAI API', 'yt-dlp', 'S3', 'systemd']
		},
		{
			name: 'Relay',
			blurb:
				'Localhost-to-public WebSocket tunnel. CLI dials wss://t.adev.me/ws, server proxies HTTP to client over the socket. Cloudflare-aware: 30s pings + 90s read deadlines defeat the proxy idle timeout, with 5s reconnect on drop. base64 framing fixes binary-body 520s.',
			stack: ['Go', 'gorilla/websocket', 'systemd', 'Cloudflare']
		},
		{
			name: 'Habit tracker (.NET API)',
			blurb:
				'ASP.NET Core API behind a React PWA. Daily logging, streak engine, biometric ingestion. Built solo; deployed to a single VPS with systemd and Postgres.',
			stack: ['C#', 'ASP.NET Core', 'PostgreSQL', 'React']
		}
	];
</script>

<main class="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-20">
	<!-- hero -->
	<header class="space-y-6">
		<div class="flex items-center gap-2 text-sm text-[color:var(--color-text-3)]">
			<span class="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
			<span class="font-mono">available for work</span>
		</div>

		<h1 class="text-5xl md:text-6xl font-semibold tracking-tight">
			ash<span class="text-accent">.</span>
		</h1>

		<p class="text-lg md:text-xl text-[color:var(--color-text-2)] leading-relaxed max-w-2xl">
			Software engineer in the UK. I build end-to-end systems in
			<span class="text-[color:var(--color-text)]">Go</span>,
			<span class="text-[color:var(--color-text)]">C#</span>, and
			<span class="text-[color:var(--color-text)]">PHP</span>. Backend through to the screen.
		</p>

		<div class="flex flex-wrap gap-2 pt-2">
			{#each stack as s (s)}
				<span
					class="text-xs font-mono px-2 py-1 rounded border border-[color:var(--color-border)] text-[color:var(--color-text-2)]"
				>
					{s}
				</span>
			{/each}
		</div>

		<div class="flex flex-wrap items-center gap-5 pt-4 text-sm">
			<a
				href="mailto:contact@adev.me"
				class="inline-flex items-center gap-2 text-[color:var(--color-text-2)] hover:text-accent transition-colors"
			>
				<Mail class="w-4 h-4" />
				contact@adev.me
			</a>
			<a
				href="https://github.com/adev-me"
				class="inline-flex items-center gap-2 text-[color:var(--color-text-2)] hover:text-accent transition-colors"
			>
				<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"
					/>
				</svg>
				github.com/adev-me
			</a>
			<span class="inline-flex items-center gap-2 text-[color:var(--color-text-3)]">
				<MapPin class="w-4 h-4" />
				United Kingdom
			</span>
		</div>
	</header>

	<!-- about -->
	<section class="space-y-4">
		<h2 class="text-xs uppercase tracking-widest text-[color:var(--color-text-3)] font-mono">
			about
		</h2>
		<div class="space-y-4 text-[color:var(--color-text-2)] leading-relaxed">
			<p>
				I write the kind of software I want to use myself: small, fast, single-purpose. I prefer
				owning the whole stack (designing the schema, writing the API, shipping the frontend,
				running it on my own infrastructure) over building one slice of someone else's system.
			</p>
			<p>
				Day-to-day I move fluently between Go, C#, and PHP. I like long-running services, terse
				interfaces, and code that reads in a single pass. I work from first principles, ship
				early, and refactor when reality disagrees.
			</p>
		</div>
	</section>

	<!-- projects -->
	<section class="space-y-6">
		<h2 class="text-xs uppercase tracking-widest text-[color:var(--color-text-3)] font-mono">
			selected projects
		</h2>
		<ul class="space-y-4">
			{#each projects as p (p.name)}
				<li
					class="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 hover:border-accent/50 transition-colors group"
				>
					<div class="flex items-baseline justify-between gap-4">
						<h3 class="text-lg font-medium">
							{#if p.href}
								<a
									href={p.href}
									class="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
								>
									{p.name}
									<ArrowUpRight
										class="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
									/>
								</a>
							{:else}
								{p.name}
							{/if}
						</h3>
					</div>
					<p class="mt-2 text-sm text-[color:var(--color-text-2)] leading-relaxed">
						{p.blurb}
					</p>
					<div class="mt-3 flex flex-wrap gap-1.5">
						{#each p.stack as s (s)}
							<span
								class="text-[10px] font-mono px-1.5 py-0.5 rounded text-[color:var(--color-text-3)]"
							>
								{s}
							</span>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<!-- contact / footer -->
	<footer class="pt-8 border-t border-[color:var(--color-border)] space-y-4">
		<h2 class="text-xs uppercase tracking-widest text-[color:var(--color-text-3)] font-mono">
			get in touch
		</h2>
		<p class="text-[color:var(--color-text-2)]">
			Permanent or contract roles, UK or remote.
			<a href="mailto:contact@adev.me" class="text-accent hover:underline">contact@adev.me</a>.
		</p>
		<p class="text-xs text-[color:var(--color-text-3)] font-mono pt-4">
			© ash · built on adev
		</p>
	</footer>
</main>
