'use client';

import styles from "./page.module.scss";
import { Container, Banner, Card, Filter } from "@/components/index";
import { getAllCoffees, AllCoffesType } from "@/app/services/api";
import { useEffect, useState } from "react";


export default function Home() {
  const [allCoffees, setAllCoffees] = useState<AllCoffesType[]>([]);
  const [filteredCoffees, setFilteredCoffees] = useState<AllCoffesType[]>([]);
  const [loading, setLoading] = useState(true);
  const filterOptions = ['all products', 'available now', 'popular'];
  const [filter, setFilter] = useState<string>('all products');

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  }
  useEffect(() => {
    if (allCoffees.length === 0) {
      setLoading(true);
      getAllCoffees().then((data) => {
        setAllCoffees(data || [] as AllCoffesType[]);
        setFilteredCoffees(data || [] as AllCoffesType[]);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (filter === 'all products') {
      setFilteredCoffees(allCoffees);
    } else if (filter === 'available now') {
      setFilteredCoffees(allCoffees.filter((coffee) => coffee.available));
    } else if (filter === 'popular') {
      setFilteredCoffees(allCoffees.filter((coffee) => coffee.popular));
    }


  }, [filter])
  return (
    <main className={styles.page}>
      <Banner />
      <Container>
        <div>
          <h1>Our Collection</h1>
          <p className={styles.description}>Discover our premium coffee collection sourced from the finest coffee regions around the world.
            Join us on a journey of flavor, tradition, and passion.</p>
        </div>
        <Filter filter={filterOptions} onFilterChange={(e) => handleFilterChange(e)} selectedFilter={filter} />

        <section className={styles.cards}>

          {loading ? <div>Loading...</div> : filteredCoffees.map((coffee) => (
            <Card key={coffee.id} image={coffee.image} title={coffee.name} price={coffee.price} votes={coffee.votes} rating={coffee.rating} isPopular={coffee.popular} available={coffee.available} />
          ))}
        </section>
      </Container>
    </main>
  );
}
