import styles from './filter.module.scss';

import { Button } from "@/components/index";


type FilterProps = {
    filter: string[];
    onFilterChange: (filter: string) => void;
    selectedFilter: string;
}

export const Filter = ({ filter, onFilterChange, selectedFilter }: FilterProps) => {

    return (
        <div className={styles.filter}>
            {filter.map((item) => (
                <Button key={item} disabled={selectedFilter === item} text={item} onClick={() => onFilterChange(item)} />
            ))}
        </div>
    )
}