import { useNavigate } from 'react-router-dom';
import { Button, Container } from '@components';
import styles from '../../pages/not-found/not-found.module.css';

export default function FallBackError({ children, HTTP = 500 }) {
  const navigate = useNavigate();
  const code = Number(HTTP) || 500;
  const message = children || 'Ocurrió un error inesperado :(';

  return (
    <Container size="auto">
      <div className={styles['not-found-container']}>
        <div className={styles['not-found-content']}>
          <div className={styles['not-found-code']}>
            <span className={styles['code-404']}>{code}</span>
          </div>

          <h1 className={styles['not-found-title']}>Error del Sistema</h1>

          <p className={styles['not-found-description']}>
            {message}
          </p>

          <p className={styles['not-found-subtitle']}>
            No te preocupes, puedes volver al inicio o recargar la página.
          </p>

          <div className={styles['not-found-buttons']}>
            <Button
              type="primary"
              size="small"
              onClick={() => navigate('/')}
              classname={styles['btn-return']}
            >
              Ir al Inicio
            </Button>

            <Button
              type="sky"
              size="small"
              onClick={() => window.location.reload()}
              classname={styles['btn-back']}
            >
              Recargar
            </Button>
          </div>
        </div>

        <div className={styles['not-found-decoration']}>
          <div className={`${styles['decoration-circle']} ${styles['circle-primary']}`}></div>
          <div className={`${styles['decoration-circle']} ${styles['circle-secondary']}`}></div>
        </div>
      </div>
    </Container>
  );
}
