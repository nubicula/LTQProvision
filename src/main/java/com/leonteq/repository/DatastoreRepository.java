package com.leonteq.repository;

import com.leonteq.domain.Datastore;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Datastore entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DatastoreRepository extends JpaRepository<Datastore, Long> {

}
