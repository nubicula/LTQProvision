package com.leonteq.repository;

import com.leonteq.domain.DatastoreCluster;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the DatastoreCluster entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DatastoreClusterRepository extends JpaRepository<DatastoreCluster, Long> {

}
