import {
  MdOutlineRestaurant,
  MdLocalMovies,
  MdLightbulb,
  MdChair,
} from "react-icons/md";
import { RiComputerFill, RiCarFill } from "react-icons/ri";
import { FaTshirt, FaShoppingCart, FaBook, FaQuestion } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import cls from "classnames";

import {
  FOOD_ICON,
  HOUSEHOLD_ICON,
  ENTERTAINMENT_ICON,
  CLOTHES_ICON,
  GROCERY_ICON,
  APPLIANCES_ICON,
  UTILITIES_ICON,
  HEALTH_ICON,
  EDUCATION_ICON,
  TRANSPORTATION_ICON,
  OTHERS_ICON,
} from "../../../shared/icons";

import styles from "./CategoryIcon.module.css";

interface Props {
  type: string;
}

const CategoryIcon = (props: Props) => {
  const { type } = props;

  const renderIcon = () => {
    switch (type) {
      case FOOD_ICON:
        return <MdOutlineRestaurant />;
      case HOUSEHOLD_ICON:
        return <MdChair />;
      case ENTERTAINMENT_ICON:
        return <MdLocalMovies />;
      case CLOTHES_ICON:
        return <FaTshirt />;
      case GROCERY_ICON:
        return <FaShoppingCart />;
      case APPLIANCES_ICON:
        return <RiComputerFill />;
      case UTILITIES_ICON:
        return <MdLightbulb />;
      case HEALTH_ICON:
        return <BiPlusMedical />;
      case EDUCATION_ICON:
        return <FaBook />;
      case TRANSPORTATION_ICON:
        return <RiCarFill />;
      case OTHERS_ICON:
        return <HiDotsHorizontal />;
      default:
        return <FaQuestion />;
    }
  };

  const getIconColor = () => {
    switch (type) {
      case FOOD_ICON:
        return styles.food;
      case HOUSEHOLD_ICON:
        return styles.household;
      case ENTERTAINMENT_ICON:
        return styles.entertainment;
      case CLOTHES_ICON:
        return styles.clothes;
      case GROCERY_ICON:
        return styles.grocery;
      case APPLIANCES_ICON:
        return styles.appliances;
      case UTILITIES_ICON:
        return styles.utilities;
      case HEALTH_ICON:
        return styles.health;
      case EDUCATION_ICON:
        return styles.education;
      case TRANSPORTATION_ICON:
        return styles.transportation;
      case OTHERS_ICON:
        return styles.others;
      default:
        return styles.default;
    }
  };

  return <div className={cls(styles.icon, getIconColor())}>{renderIcon()}</div>;
};

export default CategoryIcon;
