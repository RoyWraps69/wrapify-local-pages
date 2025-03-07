
import { FAQ } from '@/components/insurance/InsuranceFAQSection';
import { 
  generateInsuranceSchemas,
  generateFAQSchema
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
export const generateFAQSchema = (faqs: FAQ[]) => {
  return generateFAQSchema(faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  })));
};
