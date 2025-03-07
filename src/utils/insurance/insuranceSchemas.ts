
import { FAQ } from '@/components/insurance/InsuranceFAQSection';
import { 
  generateInsuranceSchema as generateBaseInsuranceSchema,
  generateFAQSchema as generateBaseFAQSchema
} from '../seo/schemaGenerator';

/**
 * @deprecated Use the utilities in src/utils/seo/schemaGenerator.ts instead
 */
export const generateLegacyInsuranceSchema = () => {
  return generateBaseInsuranceSchema();
};

/**
 * @deprecated Use the utilities in src/utils/seo/schemaGenerator.ts instead
 */
export const generateLegacyFAQSchema = (faqs: FAQ[] = []) => {
  return generateBaseFAQSchema(faqs);
};
