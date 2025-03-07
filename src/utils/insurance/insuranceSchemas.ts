
import { FAQ } from '@/components/insurance/InsuranceFAQSection';
import { 
  generateInsuranceSchemas,
  generateFAQSchema as generateBaseFAQSchema
} from '../seo/schemaGenerator';

/**
 * @deprecated Use the utilities in src/utils/seo/schemaGenerator.ts instead
 */
export const generateLegacyInsuranceSchema = () => {
  return generateInsuranceSchemas();
};

/**
 * @deprecated Use the utilities in src/utils/seo/schemaGenerator.ts instead
 */
export const generateLegacyFAQSchema = (faqs: FAQ[] = []) => {
  return generateBaseFAQSchema(faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })));
};
