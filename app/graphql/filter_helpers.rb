module FilterHelpers
  def where(filters)
    processed_filters = process_filters(filters)
    processed_filters.with_indifferent_access
  end

  def order(order_by)
    key = ((order_by && order_by.sort) || "id").downcase.to_sym
    value = ((order_by && order_by.direction) || "asc").downcase.to_sym
    o = {}
    o[key] = value
    o
  end

  def process_filters(filters)
    processed_filters = {}

    filters.map do |key, value|
      if key == :updated_within_days
        processed_filters['updated_at'] = (DateTime.now - value)..DateTime.now
      else
        processed_filters[key] = value
      end
    end

    processed_filters
  end
end
