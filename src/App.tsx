import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {Error404} from "./components/pages/Error404.tsx";
import {S} from './components/pages/_styles'
import {Model} from "./components/pages/Model";

export const PATH= {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  ERROR: "/error404"
} as const

export const App = ()=> {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={PATH.ADIDAS}>adidas</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.PUMA}>puma</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={PATH.ABIBAS}>abibas</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={PATH.ADIDAS}/>}/>

            <Route path={PATH.ADIDAS} element={<PageOne/>}/>
            <Route path={PATH.PUMA} element={<PageTwo/>}/>
            <Route path={PATH.ABIBAS} element={<PageThree/>}/>
            <Route path={'/:brand/model/:id'} element={<Model/>}/>

            <Route path={'/*'} element={<Error404/>}/>
            {/*<Route path='*' element={<Navigate to={PATH.ERROR}/>}/>*/}
            {/*<Route path={PATH.ERROR} element={<Error404/>}/>*/}
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


