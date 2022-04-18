import classNames from "classnames";
import { ChangeEventHandler } from "react";
import styles from "./pill.module.scss";

export type IPillRadio = {
  id: string;
  label: string;
  name: string;
  neutral?: never;
  onChange: ChangeEventHandler<HTMLInputElement>;
  selected: boolean;
  value: string;
};

export type IPillButton = {
  id?: string;
  label: string;
  name?: never;
  neutral: boolean;
  onClick: ChangeEventHandler;
  onChange?: never;
  selected?: never;
  value?: never;
};

export type IPill = { className?: string } & (IPillRadio | IPillButton);

export const Pill = (pill: IPill) => {
  return pill.neutral ? (
    <button id={pill.id} className={classNames(styles.button, styles.new)}>
      {pill.label}
    </button>
  ) : (
    <>
      <input
        className={styles.input}
        type="radio"
        id={pill.id}
        name={pill.name}
        value={pill.value}
        checked={pill.selected}
        onChange={pill.onChange}
      />
      <label
        htmlFor={pill.id}
        className={classNames(
          styles.button,
          {
            [styles.primary]: pill.selected,
            [styles.secondary]: !pill.selected,
          },
          pill.className
        )}
      >
        {pill.label}
      </label>
    </>
  );
};
