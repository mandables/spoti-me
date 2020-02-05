export {truncate}

function truncate(string) {
    return string.length > 15 ? string.slice(0, 13) + "..." : string;
  };