/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Orders;

/**
 * @author linuss
 */
@Repository
public interface OrderRepository extends JpaRepository<Orders, Long>{}
