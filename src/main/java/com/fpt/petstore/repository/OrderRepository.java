/**
 * 
 */
package com.fpt.petstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fpt.petstore.entities.Order;

/**
 * @author linuss
 */

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{}
