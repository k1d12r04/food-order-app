import styles from './IntroCard.module.scss';
import Card from '../UI/Card/Card';

const IntroCard = () => {
  return (
    <Card className={styles.intro}>
      <h2> Tadı Damağınızda Kalacak Lezzetli Yemekler </h2>
      <p>
        {' '}
        En sevdiğiniz yemeğinizi hemen seçin. Ardından lezzet deryasında bir
        yolculuğa çıkın.{' '}
      </p>
      <p>
        {' '}
        Tüm ürünlerimiz içinde yalnızca doğallık barındırır. Hijyenik koşullara
        uygun prosedürlerle üretilir ve size en hızlı şekilde sunulur.{' '}
      </p>
    </Card>
  );
};

export default IntroCard;
