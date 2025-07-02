import type { SVGProps } from "react"

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    viewBox="0 0 180 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Google-inspired colorful circles */}
    <circle cx="20" cy="20" r="16" fill="#4285F4" opacity="0.15" />
    <circle cx="20" cy="20" r="12" fill="#EA4335" opacity="0.15" />
    <circle cx="20" cy="20" r="8" fill="#FBBC04" opacity="0.15" />
    <circle cx="20" cy="20" r="4" fill="#34A853" opacity="0.15" />

    {/* AI Brain network */}
    <path
      d="M20 6 C28 6 34 12 34 20 C34 28 28 34 20 34 C12 34 6 28 6 20 C6 12 12 6 20 6 Z"
      fill="none"
      stroke="#4285F4"
      strokeWidth="2"
    />
    <circle cx="16" cy="15" r="2" fill="#EA4335" />
    <circle cx="24" cy="15" r="2" fill="#FBBC04" />
    <circle cx="20" cy="25" r="2" fill="#34A853" />
    <path d="M16 15 L20 25 L24 15 M16 15 L24 15" stroke="#4285F4" strokeWidth="1.5" />

    {/* Company name - using path elements instead of text */}
    <g className="fill-gray-900 dark:fill-gray-50">
      {/* Google Ads AI - simplified text as paths */}
      <path d="M50 12 h20 v3 h-17 v4 h15 v3 h-15 v4 h17 v3 h-20 z" />
      <path d="M74 12 h3 v15 h-3 z" />
      <path d="M80 12 h15 v3 h-6 v12 h-3 v-12 h-6 z" />

      <path d="M100 15 h12 v3 h-9 v3 h8 v3 h-8 v3 h9 v3 h-12 z" />
      <path d="M116 15 h3 v12 h-3 z" />
    </g>
  </svg>
)
