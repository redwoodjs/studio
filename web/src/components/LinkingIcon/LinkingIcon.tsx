import { Link } from '@redwoodjs/router'

export const LinkingIcon = ({ to }: { to: string }) => {
  return (
    <Link to={to}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    </Link>
  )
}
