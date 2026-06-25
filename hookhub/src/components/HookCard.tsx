import { Hook, HookCategory } from '@/types/hook';

interface HookCardProps {
  hook: Hook;
}

const categoryStyles: Record<string, string> = {
  [HookCategory.MONITORING]: 'bg-sky-50 text-sky-700 border-sky-100',
  [HookCategory.SECURITY]: 'bg-red-50 text-red-700 border-red-100',
  [HookCategory.WORKFLOW]: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  [HookCategory.TESTING]: 'bg-amber-50 text-amber-700 border-amber-100',
  [HookCategory.INTEGRATION]: 'bg-violet-50 text-violet-700 border-violet-100',
  [HookCategory.UTILITY]: 'bg-stone-100 text-stone-600 border-stone-200',
  [HookCategory.LEARNING]: 'bg-teal-50 text-teal-700 border-teal-100',
  [HookCategory.TEAM]: 'bg-pink-50 text-pink-700 border-pink-100',
};

const languageDot: Record<string, string> = {
  'Python': 'bg-yellow-400',
  'JavaScript': 'bg-yellow-300',
  'TypeScript': 'bg-blue-400',
  'PHP': 'bg-indigo-400',
  'Go': 'bg-cyan-400',
};

export default function HookCard({ hook }: HookCardProps) {
  const catStyle = categoryStyles[hook.category] ?? 'bg-stone-100 text-stone-600 border-stone-200';

  return (
    <div className="group bg-white border border-parchment-200 rounded-xl p-5 hover:border-parchment-300 hover:shadow-[0_2px_16px_rgba(28,25,22,0.07)] transition-all duration-200">

      {/* Title row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-[0.9375rem] font-semibold text-sand-900 leading-snug">
          {hook.name}
        </h3>
        {hook.featured && (
          <span className="flex-shrink-0 text-[10px] font-semibold uppercase tracking-wider text-coral-700 bg-coral-50 border border-coral-200 px-2 py-0.5 rounded">
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-[0.8125rem] text-sand-600 leading-relaxed mb-4 line-clamp-2">
        {hook.description}
      </p>

      {/* Category + language */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`inline-flex text-[11px] font-medium px-2 py-0.5 rounded border ${catStyle}`}>
          {hook.category}
        </span>
        <div className="flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${languageDot[hook.language] ?? 'bg-sand-400'}`} />
          <span className="text-[11px] text-sand-500 font-medium">{hook.language}</span>
        </div>
      </div>

      {/* Hook type tags */}
      {hook.hookTypes.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {hook.hookTypes.map((type) => (
            <span
              key={type}
              className="text-[10px] font-mono font-medium bg-parchment-100 text-sand-600 border border-parchment-200 px-2 py-0.5 rounded"
            >
              {type}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-parchment-100">
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-sand-500">{hook.author}</span>
          {hook.stars != null && (
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-sand-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-[11px] font-semibold text-sand-600 tabular-nums">{hook.stars}</span>
            </div>
          )}
        </div>

        <a
          href={hook.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-sand-600 hover:text-sand-900 transition-colors group-hover:text-coral-600"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          View on GitHub
        </a>
      </div>

    </div>
  );
}