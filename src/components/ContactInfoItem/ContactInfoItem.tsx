import React from "react";
import styles from "./ContactInfoItem.module.css";

interface ContactInfoItemProps {
  icon?: React.ReactNode;
  text?: string;
  type?: string;
}

const formatPhoneNumber = (number: string) => {
  const countryCode = number.slice(0, 2);
  const areaCode = number.slice(2, 4);
  const firstPart = number.slice(4, 5);
  const secondPart = number.slice(5, 9);
  const thirdPart = number.slice(9, 13);
  return `+${countryCode} ${areaCode} ${firstPart} ${secondPart}-${thirdPart}`;
};

const handleClick = (text: string, type: string) => {
  if (type == "phone") {
    window.open(`https://wa.me/${text}`, "_blank");
  } else if (type == "email") {
    window.location.href = `mailto:${text}`;
  } else if (type == "location") {
    window.open(`https://www.google.com/maps/search/?api=1&query=${text}`, "_blank");
  }
};

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  text = "I need text",
  type = "phone",
}) => {
  const formattedText = type == "phone" ? formatPhoneNumber(text) : text;

  return (
    <div className={styles.itemStyles} onClick={() => handleClick(text, type)}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.info}>
        <p>{formattedText}</p>
      </div>
    </div>
  );
};

export default ContactInfoItem;