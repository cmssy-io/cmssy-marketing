export const SUBMIT_FORM_MUTATION = `
  mutation SubmitForm($formId: ID!, $input: SubmitFormInput!) {
    submitForm(formId: $formId, input: $input) {
      success
      message
    }
  }
`;

export interface GraphQLResponse {
  data?: {
    submitForm?: {
      success: boolean;
      message: string;
    };
  };
  errors?: Array<{ message: string }>;
}
