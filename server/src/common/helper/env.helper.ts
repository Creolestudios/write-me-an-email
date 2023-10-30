import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(dist: string): string {
  /// get the enovironment i.e. develpoment,production,test,etc.
  const env: string | undefined = process.env.NODE_ENV;
  /// set the default file to .env
  const fallback: string = resolve(`${dist}/.env`);
  /// get the file name
  const filename: string = env ? `${env}.env` : 'development.env';
  /// get the final path to the file
  let filepath: string = resolve(`${dist}/${filename}`);

  /// print the path if necessary to check
  //   console.log(filepath);

  if (!existsSync(filepath)) {
    filepath = fallback;
  }
  return filepath;
}
