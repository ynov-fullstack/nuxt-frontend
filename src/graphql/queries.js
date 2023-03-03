export const GET_POSTS = gql`
  query getPosts {
    posts{
      data{
        id
        attributes{
            title
            description
            categories {
              data {
                id
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
`

export const HEADER_MENU = gql`
  query headerMenu {
    query {
      headerMenu{
        data{
          attributes{
            item{
              name,
              link
            }
          }
        }
      }
    }
  }
`

export const GET_POST = gql`
  query getPost($id:ID!) {
    post(id:$id){
      data{
        id
        attributes{
            title
            description
            builder{
  		        ...on ComponentBuilderTextEditor {
    		        wysiwyg
                with_background
              }
              ...on ComponentBuilderTextEmphasis {
    		        text
  		        }
            }
            categories {
              data {
                id
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
`

export const GET_CATEGORIES = gql`
  query getCategories($filters:CategoryFiltersInput) {
    categories(filters:$filters){
      data {
        attributes{
            name
            posts {
              data {
                id
                attributes {
                  title
                  description
                   categories {
                    data {
                      id
                      attributes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
`