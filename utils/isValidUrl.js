export function isValidUrl(url) {
    // Regular expression with more robust validation, including
    // scheme, domain, path, and optional query string or fragment
  
    const urlFormatRegExp = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlFormatRegExp.test(url);
  }
  