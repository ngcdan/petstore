/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Partner;

/**
 * @author linuss
 */

@Repository
public interface PartnerRepository extends JpaRepository<Partner, Long> {

  @Query(
      "SELECT p FROM Partner p WHERE p.code = :code")
  public Partner getByCode(@Param("code") String code);
}