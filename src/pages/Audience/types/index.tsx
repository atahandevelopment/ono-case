export type AudienceTypes = {
    id: number,
    name: string,
    tags: string[],
    status: string,
    created_at: string,
}

export type FilterData = {
    searchText: string;
    tag: string;
    status: string;
  };