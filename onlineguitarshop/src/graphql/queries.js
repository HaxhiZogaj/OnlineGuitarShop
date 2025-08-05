import { gql } from '@apollo/client';

export const GET_ALL_BRANDS = gql`
  query {
    findAllBrands {
      id
      name
      image
      origin
      categories
      models {
        name
        price
        type
      }
    }
  }
`;
