export const SUBMIT_FORM_MUTATION = `
  mutation SubmitForm($formId: String!, $input: SubmitFormInput!) {
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
