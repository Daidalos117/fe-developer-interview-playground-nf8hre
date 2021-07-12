export const fetcher = (url: string) =>
    fetch('https://api.codetabs.com/v1/proxy/?quest=' + url).then((res) => res.json());
