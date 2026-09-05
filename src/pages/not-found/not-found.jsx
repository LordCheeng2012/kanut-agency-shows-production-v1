import { useNavigate } from 'react-router-dom';
import { Button, Container } from '@components';
import styles from  './not-found.module.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container size='auto'>
      <div className={styles['not-found-container']}>
        <div className={styles['not-found-content']}>
          {/* Código 404 Principal */}
          <div className={styles['not-found-code']}>
            <span className={styles['code-404']}>404</span>
          </div>

          {/* Título */}
          <h1 className={styles['not-found-title']}>Página No Encontrada</h1>

          {/* Descripción */}
          <p className={styles['not-found-description']}>
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>

          {/* Submensaje */}
          <p className={styles['not-found-subtitle']}>
            Parece que te has perdido en nuesta agencia. No te preocupes, puedes volver al inicio.
          </p>

          {/* Botones de acción */}
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
              onClick={() => navigate(-1)}
              classname={styles['btn-back']}
            >
              Volver Atrás
            </Button>
          </div>
        </div>

        {/* Elemento decorativo */}
        <div className={styles['not-found-decoration']}>
          <div className={`${styles['decoration-circle']} ${styles['circle-primary']}`}></div>
          <div className={`${styles['decoration-circle']} ${styles['circle-secondary']}`}></div>
        </div>
      </div>
    </Container>
  );
}