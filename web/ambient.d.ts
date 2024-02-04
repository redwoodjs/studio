declare global {
  interface Window {
    CommunitySearch: {
      init: () => void
      toggleWidget: () => void
    }
  }
}

export {}
