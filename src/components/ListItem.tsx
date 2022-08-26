import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ListItem.module.scss";

const ListItem = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className={styles["list_item"]}>
      <motion.div onClick={() => setIsShow(!isShow)} className={styles.card}>
        <motion.h2>Framer Motion</motion.h2>
        {isShow && (
          <motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, odio sunt! Et maiores ut voluptatibus possimus quidem
              consequuntur sed modi molestias, necessitatibus autem assumenda,
              minima quaerat ipsa aspernatur natus laboriosam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              harum obcaecati repellendus aperiam fugiat officia praesentium
              quos aut inventore adipisci quis laudantium maxime esse veniam
              aliquam iusto natus, reiciendis expedita!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
export default ListItem;
