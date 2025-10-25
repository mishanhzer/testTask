export const _transform = (item: any) => {  
  return {
    file: item.file,
    preview: item.preview,
    name: item.name,
    path: item.path,
    sizes: item.sizes,
  }
}
