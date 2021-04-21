package com.fpt.petstore.repository;

import com.fpt.petstore.entities.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Nizis on 4/22/2021.
 */
@Repository
public interface ContactRepository extends JpaRepository<Contact,Integer>{

}
