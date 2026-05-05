import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {Error404} from "./components/pages/Error404.tsx";
import {getStylesLink} from "./common/getStylesLink.ts";

export const URL= {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/ABIBAS",
}

export const App = ()=> {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <NavLink to={'/adidas'} className={getStylesLink}>adidas</NavLink>
          <NavLink to={'/puma'} className={getStylesLink}>puma</NavLink>
          <NavLink to={'/abibas'} className={getStylesLink}>abibas</NavLink>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={'/adidas'}/>}/>

            <Route path="/adidas" element={<PageOne/>}/>
            <Route path="/puma" element={<PageTwo/>}/>
            <Route path="/abibas" element={<PageThree/>}/>

            <Route path='*' element={<Navigate to='/error404'/>}/>
            <Route path='/error404' element={<Error404/>}/>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
