/// jpg extenstion remover
export async function removeJpgExt(...images: string[]): Promise<string[]> {
  /// filtering the images with jpg extenstion and then mapping to the output
  let filteredImages = images.map((img) => {
    if (img.endsWith('.jpg')) {
      return img.substring(0, img.length - 4);
    }
    return img;
  });
  return filteredImages;
}

/// underscore/Dash remover
export async function removeUnderscoreORDash(
  images: string[],
): Promise<string[]> {
  /// removing dash or underscore
  let filteredImages = images.map((img) => img.replace(/[-_]/g, ' '));

  return filteredImages;
}

/// camelCase splitter
export async function splitCamelCase(images: string[]): Promise<string[]> {
  let filteredImages = images.map((img) =>
    img.replace(/([a-z])([A-Z])/g, '$1 $2'),
  );
  return filteredImages;
}
