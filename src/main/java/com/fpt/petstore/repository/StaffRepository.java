/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Staff;

/**
 * @author linuss
 */

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {}
