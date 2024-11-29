import Roadmap from "@/components/Roadmap/Roadmap";
import classes from "./NotFound.module.scss";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import { Link } from "react-router-dom";

export default function NotFound() {
  const links = [
    {name: "Home", url: "/"},
    {name: "404", url: "/not-found"},
  ]

  return (
    <main className={classes["not-found"]}>
        <div className={classes["not-found--container"]}>
          <Roadmap links={links} />
          <section className={classes["not-found--content"]}>
              <h1 className={classes["not-found--title"]}>
                404 Not Found
              </h1>
              <p className={classes["not-found--subtitle"]}>
                Your visited page not found. You may go home page.
              </p>
              <Link to="/">
                <ButtonLarge>
                  Back to home page
                </ButtonLarge>
              </Link>
          </section>
        </div>
    </main>
  )
}
