import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import { Card, Spinner, Alert, ListGroup, Button } from "react-bootstrap";

function PostCommentsPage() {
  const { id } = useParams();

  const {
    data: post,
    loading: loadingPost,
    error: errorPost,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const {
    data: comments,
    loading: loadingComments,
    error: errorComments,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  const loading = loadingPost || loadingComments;
  const error = errorPost || errorComments;

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">Błąd: {error.message}</Alert>;
  if (!post || !comments)
    return <Alert variant="warning">Nie znaleziono danych.</Alert>;

  return (
    <>
      <Button
        as={Link}
        to="/lab05"
        variant="outline-secondary"
        className="mb-3"
      >
        &larr; Wróć do listy
      </Button>
      <Card className="shadow-sm">
        <Card.Header>
          <Card.Title as="h2">Post:</Card.Title>
          <p className="lead">{post.title}</p>
          <Card.Text>
            <em>{post.body}</em>
          </Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle as="h4" className="mb-3">
            Komentarze ({comments.length})
          </Card.Subtitle>
          <ListGroup variant="flush">
            {comments.map((comment) => (
              <ListGroup.Item
                key={comment.id}
                className="mb-3 border rounded p-3"
              >
                <p className="mb-1">
                  <strong>{comment.name}</strong>(
                  <a
                    href={`mailto:${comment.email}`}
                    className="text-muted small"
                  >
                    {comment.email}
                  </a>
                  )
                </p>
                <p className="mb-0">{comment.body}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default PostCommentsPage;
