package com.fpt.petstore.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fpt.petstore.util.DateUtil;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * @author linuss
 */

@Entity
@Table(name="order_transaction")
@JsonInclude(Include.NON_NULL)
@Setter @Getter
@NoArgsConstructor
public class Payment extends AbstractPersistable<Long> {
  
  static public enum TransactionType { Cash, Wire, ATM, CustomerCredit }
  
  @NotNull
  private String bankAccountId;

  private double amount;
  
  @Enumerated(EnumType.STRING)
  private TransactionType transactionType;

  private String currency = "VND";
  
  @JsonFormat(pattern = DateUtil.LOCAL_DATETIME_FORMAT)
  private Date  transactionDate;

  public Payment(String bankAccount) {
    this.bankAccountId = bankAccount;
  }

  public Payment withTransactionDate(String exp) {
    this.transactionDate = DateUtil.parseCompactDateTime(exp);
    return this;
  }

  public Payment withAmount(double amount) {
    this.amount = amount;
    return this;
  }

  public Payment withTransactionType(TransactionType type) {
    this.transactionType = type;
    return this;
  }
  public Payment(String bankAccountId, TransactionType transactionType,Date transactionDate) {
    this.bankAccountId = bankAccountId;
    this.transactionType = transactionType;
    this.transactionDate = transactionDate;
  }
}
