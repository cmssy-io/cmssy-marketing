export const SUBMIT_FORM_MUTATION = `
  mutation SubmitForm($workspaceId: String!, $formSlug: String!, $input: SubmitFormInput!) {
    submitForm(workspaceId: $workspaceId, formSlug: $formSlug, input: $input) {
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
