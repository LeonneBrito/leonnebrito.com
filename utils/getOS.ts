export const getOS = () => {
  if (typeof window !== 'undefined') {
    const userAgent = window?.navigator?.userAgent || '';

    if (userAgent.includes('Windows')) {
      return 'Windows';
    }

    if (userAgent.includes('Mac')) {
      return 'MacOS';
    }

    if (userAgent.includes('X11')) {
      return 'UNIX';
    }

    if (userAgent.includes('Linux')) {
      return 'Linux';
    }

    return 'Unknown';
  }
};
