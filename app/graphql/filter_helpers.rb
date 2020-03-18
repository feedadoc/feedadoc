module FilterHelpers
  def where(filters)
    filters.to_h.with_indifferent_access
  end

  def order(order_by)
    key = ((order_by && order_by.sort) || "id").downcase.to_sym
    value = ((order_by && order_by.direction) || "asc").downcase.to_sym
    o = {}
    o[key] = value
    o
  end
end
