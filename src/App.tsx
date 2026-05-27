import styles from "./components/Site.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {S} from './components/pages/_styles'
import {PATH} from "./routes/router";


export const App = ()=> {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={PATH.ADIDAS}>adidas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PUMA}>puma</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.ABIBAS}>abibas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


