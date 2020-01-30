export {truncate}

function truncate(string) {
    return string.length > 20 ? string.slice(0, 20) + "..." : string;
  };