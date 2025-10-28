import React, { useEffect, useReducer } from "react";
import { Table, Spinner, Alert, Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import TableDataReducer from "../../data/TableDataReducer";
import TableHeaderWithSort from "../components/common/TableHeaderWithSort";

function Lab05() {
  const [tableState, dispatch] = useReducer(TableDataReducer, {
    data: [],
    originalData: [],
  });

  const {
    data: posts,
    loading: loadingPosts,
    error: errorPosts,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const {
    data: users,
    loading: loadingUsers,
    error: errorUsers,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  const {
    data: comments,
    loading: loadingComments,
    error: errorComments,
  } = useFetch("https://jsonplaceholder.typicode.com/comments");

  useEffect(() => {
    if (posts && users && comments) {
      const mergedData = posts.map((p) => ({
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
      }));

      dispatch({ type: "set_data", payload: mergedData });
    }
  }, [posts, users, comments]);

  const isLoading = loadingPosts || loadingUsers || loadingComments;
  const error = errorPosts || errorUsers || errorComments;

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" className="m-5" />
        <p>Ładowanie danych...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger">Błąd pobierania danych: {error.message}</Alert>
    );
  }

  return (
    <div>
      <h1 className="mb-4">
        Lab 5: Pobieranie danych (useEffect) i Sortowanie (useReducer)
      </h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <TableHeaderWithSort
              title="User"
              column="user"
              dispatch={dispatch}
            />
            <TableHeaderWithSort
              title="Post Title"
              column="post"
              dispatch={dispatch}
            />
            <TableHeaderWithSort
              title="Comments Count"
              column="comments"
              dispatch={dispatch}
            />
          </tr>
        </thead>
        <tbody>
          {tableState.data.map(({ user, post, comments }) => (
            <tr key={post.id}>
              <td className="align-middle" style={{ minWidth: "150px" }}>
                {user ? (
                  <Button
                    as={Link}
                    to={`/lab05/users/${user.id}`}
                    variant="link"
                    className="p-0"
                  >
                    {user.name}
                  </Button>
                ) : (
                  "Brak użytkownika"
                )}
              </td>

              <td style={{ minWidth: "300px" }}>
                <Accordion>
                  <Accordion.Item
                    eventKey={post.id.toString()}
                    className="border-0"
                  >
                    <Accordion.Header as="div" className="p-0">
                      {post.title}
                    </Accordion.Header>
                    <Accordion.Body>{post.body}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>

              <td className="align-middle text-center">
                <Button
                  as={Link}
                  to={`/lab05/posts/${post.id}/comments`}
                  variant="outline-primary"
                  size="sm"
                  className="rounded-pill"
                >
                  {comments.length}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Lab05;
