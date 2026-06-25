import HookCard from '@/components/HookCard';
import { Hook } from '@/types/hook';
import hooksData from '@/data/hooks.json';

export default function Home() {
  const hooks: Hook[] = hooksData.hooks as Hook[];
  const featuredHooks = hooks.filter(hook => hook.featured);
  const regularHooks = hooks.filter(hook => !hook.featured);
  const totalStars = hooks.reduce((sum, h) => sum + (h.stars ?? 0), 0);

  return (
    <div className="min-h-screen bg-parchment-50">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-parchment-50/95 backdrop-blur-sm border-b border-parchment-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between gap-6">

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-6 h-6 bg-coral-500 rounded flex items-center justify-center">
              <span className="text-white text-[11px] font-bold leading-none select-none" style={{fontFamily: 'var(--font-poppins), Arial, sans-serif'}}>H</span>
            </div>
            <span className="font-semibold text-sand-900 text-[14px] tracking-tight" style={{fontFamily: 'var(--font-poppins), Arial, sans-serif'}}>HookHub</span>
          </div>

          <div className="flex-1 max-w-xs">
            <div className="relative">
              <svg
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-sand-400 pointer-events-none"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Search hooks..."
                className="w-full pl-8 pr-3 py-1.5 text-[13px] border border-parchment-300 rounded-md bg-white text-sand-900 placeholder:text-sand-400 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-400 transition-colors"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <a href="#hooks" className="text-[13px] text-sand-600 hover:text-sand-900 font-medium transition-colors">
              Browse
            </a>
            <a
              href="#"
              className="text-[13px] font-medium bg-coral-500 hover:bg-coral-600 text-white px-3 py-1.5 rounded-md transition-colors"
            >
              Submit Hook
            </a>
          </nav>

        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Hero */}
        <section className="pt-14 pb-10 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-coral-600 mb-4">
              Community-built
            </p>
            <h1 className="text-[2.625rem] font-bold text-sand-900 tracking-[-0.025em] leading-[1.1] mb-4 text-balance">
              Hooks for Claude Code
            </h1>
            <p className="text-[1.0625rem] text-sand-600 leading-relaxed mb-8 max-w-sm mx-auto">
              Extend Claude Code with lifecycle automation, security validation, team workflows, and integrations.
            </p>
            <a
              href="#hooks"
              className="inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Browse Hooks
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 pb-12 border-b border-parchment-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-sand-900 font-mono tabular-nums">{hooks.length}</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-sand-500 mt-1">Hooks</div>
          </div>
          <div className="w-px h-8 bg-parchment-300" />
          <div className="text-center">
            <div className="text-2xl font-bold text-sand-900 font-mono tabular-nums">{totalStars.toLocaleString('en-US')}</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-sand-500 mt-1">Stars</div>
          </div>
          <div className="w-px h-8 bg-parchment-300" />
          <div className="text-center">
            <div className="text-2xl font-bold text-sand-900 font-mono tabular-nums">8</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-sand-500 mt-1">Categories</div>
          </div>
        </div>

        {/* Featured hooks */}
        {featuredHooks.length > 0 && (
          <section id="hooks" className="pt-10 pb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-sand-500 flex-shrink-0">
                Featured
              </span>
              <div className="flex-1 h-px bg-parchment-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredHooks.map((hook) => (
                <HookCard key={hook.id} hook={hook} />
              ))}
            </div>
          </section>
        )}

        {/* All hooks */}
        <section className="pt-4 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-sand-500 flex-shrink-0">
              All Hooks
            </span>
            <div className="flex-1 h-px bg-parchment-200" />
            <span className="text-[10px] font-medium text-sand-400 tabular-nums flex-shrink-0">
              {regularHooks.length} hooks
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regularHooks.map((hook) => (
              <HookCard key={hook.id} hook={hook} />
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-parchment-200 py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-coral-500 rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold leading-none select-none" style={{fontFamily: 'var(--font-poppins), Arial, sans-serif'}}>H</span>
            </div>
            <span className="text-[12px] font-medium text-sand-700" style={{fontFamily: 'var(--font-poppins), Arial, sans-serif'}}>HookHub</span>
          </div>
          <span className="text-[11px] text-sand-400">Community hooks for Claude Code</span>
        </div>
      </footer>

    </div>
  );
}
