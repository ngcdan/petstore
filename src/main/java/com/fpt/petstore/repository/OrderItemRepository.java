package com.fpt.petstore.repository;

import com.fpt.petstore.entities.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Nizis on 4/14/2021.
 */
@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem,Integer> {
    @Query(value = "SELECT * FROM ORDER_ITEM oi INNER JOIN ORDERS o on oi.orderid= o.id where oi.orderid =?1",nativeQuery = true)
    List<OrderItem> listOrderItembyOrderId(Long id);
}
