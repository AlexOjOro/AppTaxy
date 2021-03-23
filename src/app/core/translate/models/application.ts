import { Language } from './language';
import { Namespace } from './namespace';

export class Application {
  id: number;
  application: string;
  languages: Language[];
  namespaces: Namespace[];
}
