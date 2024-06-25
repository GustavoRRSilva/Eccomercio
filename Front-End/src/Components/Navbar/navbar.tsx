import { useState } from "react";
import styles from "./navbar.module.css";
import { IoIosClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

import Image from "next/image";

export default function Nav() {
  const content = (
    <div className={styles.navMobile}>
      <span className={styles.inputSearch}>
        <input type="text"></input>
        <Image src="/lupa.svg" width="20" height="20" alt="img lupa" />
      </span>
      <Link href="/">
        <li data-aos="fade-in">Home</li>
      </Link>
      <Link href="/produtos">
        <li>Produtos</li>
      </Link>
      <Link href="/pedidos">
        <li>Meus Pedidos</li>
      </Link>
      <Link href="/carrinho">
        <li>Carrinho</li>
      </Link>

      <Link href="/mensagens">
        <li>Mensagens</li>
      </Link>
    </div>
  );
  const [click, setClick] = useState(false);
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.navbar}>
          <div className={styles.ladoEsquerdo}>
            <li className={styles.logo}>
              <Image src="/logo.svg" width="20" height="20" alt="img logo" />
            </li>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/produtos">
              <li>Produtos</li>
            </Link>
            <Link href="/pedidos">
              <li>Meus Pedidos</li>
            </Link>
          </div>
          <div className={styles.ladoDireito}>
            <span className={styles.inputSearch}>
              <input type="text"></input>
              <Image src="/lupa.svg" width="20" height="20" alt="img lupa" />
            </span>

            <button className={styles.btnHeader}>
              <Image
                src="/cart.svg"
                width="20"
                height="20"
                alt="img carrinho"
              />
            </button>
            <button className={styles.btnHeader}>
              <Image
                src="/notify.svg"
                width="40"
                height="20"
                alt="img notify"
              />
            </button>
          </div>
          <button className={styles.btnNav} onClick={() => setClick(!click)}>
            {click ? <IoIosClose /> : <CiMenuFries />}
          </button>

          {click && content}
        </ul>
      </nav>
      <div className={styles.faixaGold}></div>
    </header>
  );
}
