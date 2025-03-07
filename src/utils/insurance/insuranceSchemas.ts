
import { FAQ } from '@/components/insurance/InsuranceFAQSection';
import { 
  generateInsuranceSchema,
  generateFAQSchema as generateFAQSchemaFromUtil
} from '../seo/schemaGenerator';

/**
 * @deprecated Use the utilities in src/utils/seo/schemaGenerator.ts instead
 */
export const generateInsuranceSchema = () => {
  return generateInsuranceSchema();
};

/**
 * @deprecated Use the utilities in src/utils/seo/schemaGenerator.ts instead
 */
export const generateFAQSchema = (faqs: FAQ[] = []) => {
  return generateFAQSchemaFromUtil(faqs);
};
