export interface projectData {
    title: string,
    name: string,
    address: string,
    projectType: string,
    materials: ListItem[]
}

export interface ListItem {
    imageUrl: string;
    description: string;
    quantity: string;
}
